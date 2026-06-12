import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noo")
export default class NooController {
  @operation({
    summary: "Get Noo",
  })
  @get()
  static getNoo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Noo",
  })
  @post("{id}")
  static createNoo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
