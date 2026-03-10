import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dks")
export default class DksController {
  @operation({
    summary: "Get Dks",
  })
  @get()
  static getDks = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dks",
  })
  @post("{id}")
  static createDks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
