import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hzg")
export default class HzgController {
  @operation({
    summary: "Get Hzg",
  })
  @get()
  static getHzg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hzg",
  })
  @post("{id}")
  static createHzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
