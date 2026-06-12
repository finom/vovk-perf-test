import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzb")
export default class KzbController {
  @operation({
    summary: "Get Kzb",
  })
  @get()
  static getKzb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzb",
  })
  @post("{id}")
  static createKzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
