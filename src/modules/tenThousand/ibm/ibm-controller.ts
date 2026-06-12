import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibm")
export default class IbmController {
  @operation({
    summary: "Get Ibm",
  })
  @get()
  static getIbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibm",
  })
  @post("{id}")
  static createIbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
