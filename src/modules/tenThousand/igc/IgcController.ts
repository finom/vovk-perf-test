import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igc")
export default class IgcController {
  @operation({
    summary: "Get Igc",
  })
  @get()
  static getIgc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igc",
  })
  @post("{id}")
  static createIgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
