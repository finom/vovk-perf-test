import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbg")
export default class GbgController {
  @operation({
    summary: "Get Gbg",
  })
  @get()
  static getGbg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbg",
  })
  @post("{id}")
  static createGbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
