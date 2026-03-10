import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iea")
export default class IeaController {
  @operation({
    summary: "Get Iea",
  })
  @get()
  static getIea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iea",
  })
  @post("{id}")
  static createIea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
