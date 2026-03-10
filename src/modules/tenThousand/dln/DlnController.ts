import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dln")
export default class DlnController {
  @operation({
    summary: "Get Dln",
  })
  @get()
  static getDln = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dln",
  })
  @post("{id}")
  static createDln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
