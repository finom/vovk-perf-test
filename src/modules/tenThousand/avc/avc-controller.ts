import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avc")
export default class AvcController {
  @operation({
    summary: "Get Avc",
  })
  @get()
  static getAvc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avc",
  })
  @post("{id}")
  static createAvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
