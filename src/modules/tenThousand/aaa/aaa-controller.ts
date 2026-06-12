import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aaa")
export default class AaaController {
  @operation({
    summary: "Get Aaa",
  })
  @get()
  static getAaa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aaa",
  })
  @post("{id}")
  static createAaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
