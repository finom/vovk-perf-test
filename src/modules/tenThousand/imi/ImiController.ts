import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imi")
export default class ImiController {
  @operation({
    summary: "Get Imi",
  })
  @get()
  static getImi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imi",
  })
  @post("{id}")
  static createImi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
