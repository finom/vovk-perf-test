import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilw")
export default class IlwController {
  @operation({
    summary: "Get Ilw",
  })
  @get()
  static getIlw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilw",
  })
  @post("{id}")
  static createIlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
