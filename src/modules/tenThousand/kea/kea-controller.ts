import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kea")
export default class KeaController {
  @operation({
    summary: "Get Kea",
  })
  @get()
  static getKea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kea",
  })
  @post("{id}")
  static createKea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
