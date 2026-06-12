import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ue")
export default class UeController {
  @operation({
    summary: "Get Ue",
  })
  @get()
  static getUe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ue",
  })
  @post("{id}")
  static createUe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
