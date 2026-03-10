import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fof")
export default class FofController {
  @operation({
    summary: "Get Fof",
  })
  @get()
  static getFof = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fof",
  })
  @post("{id}")
  static createFof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
