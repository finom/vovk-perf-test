import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foz")
export default class FozController {
  @operation({
    summary: "Get Foz",
  })
  @get()
  static getFoz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Foz",
  })
  @post("{id}")
  static createFoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
