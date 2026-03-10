import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksy")
export default class KsyController {
  @operation({
    summary: "Get Ksy",
  })
  @get()
  static getKsy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksy",
  })
  @post("{id}")
  static createKsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
