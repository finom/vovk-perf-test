import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ife")
export default class IfeController {
  @operation({
    summary: "Get Ife",
  })
  @get()
  static getIfe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ife",
  })
  @post("{id}")
  static createIfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
