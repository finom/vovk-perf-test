import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqi")
export default class IqiController {
  @operation({
    summary: "Get Iqi",
  })
  @get()
  static getIqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqi",
  })
  @post("{id}")
  static createIqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
