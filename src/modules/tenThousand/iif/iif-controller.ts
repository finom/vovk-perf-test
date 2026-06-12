import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iif")
export default class IifController {
  @operation({
    summary: "Get Iif",
  })
  @get()
  static getIif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iif",
  })
  @post("{id}")
  static createIif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
