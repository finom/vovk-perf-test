import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdu")
export default class KduController {
  @operation({
    summary: "Get Kdu",
  })
  @get()
  static getKdu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdu",
  })
  @post("{id}")
  static createKdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
