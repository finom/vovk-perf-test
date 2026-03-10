import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kny")
export default class KnyController {
  @operation({
    summary: "Get Kny",
  })
  @get()
  static getKny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kny",
  })
  @post("{id}")
  static createKny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
