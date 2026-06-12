import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("faj")
export default class FajController {
  @operation({
    summary: "Get Faj",
  })
  @get()
  static getFaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Faj",
  })
  @post("{id}")
  static createFaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
