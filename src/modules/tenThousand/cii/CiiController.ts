import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cii")
export default class CiiController {
  @operation({
    summary: "Get Cii",
  })
  @get()
  static getCii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cii",
  })
  @post("{id}")
  static createCii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
