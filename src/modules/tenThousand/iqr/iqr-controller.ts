import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqr")
export default class IqrController {
  @operation({
    summary: "Get Iqr",
  })
  @get()
  static getIqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqr",
  })
  @post("{id}")
  static createIqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
