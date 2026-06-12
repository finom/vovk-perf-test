import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpg")
export default class KpgController {
  @operation({
    summary: "Get Kpg",
  })
  @get()
  static getKpg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpg",
  })
  @post("{id}")
  static createKpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
