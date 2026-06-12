import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzh")
export default class BzhController {
  @operation({
    summary: "Get Bzh",
  })
  @get()
  static getBzh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzh",
  })
  @post("{id}")
  static createBzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
