import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzm")
export default class KzmController {
  @operation({
    summary: "Get Kzm",
  })
  @get()
  static getKzm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzm",
  })
  @post("{id}")
  static createKzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
