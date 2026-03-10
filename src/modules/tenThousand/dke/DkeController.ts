import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dke")
export default class DkeController {
  @operation({
    summary: "Get Dke",
  })
  @get()
  static getDke = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dke",
  })
  @post("{id}")
  static createDke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
