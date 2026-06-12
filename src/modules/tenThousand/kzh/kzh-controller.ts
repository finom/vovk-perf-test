import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzh")
export default class KzhController {
  @operation({
    summary: "Get Kzh",
  })
  @get()
  static getKzh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzh",
  })
  @post("{id}")
  static createKzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
