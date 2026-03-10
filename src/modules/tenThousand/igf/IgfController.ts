import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igf")
export default class IgfController {
  @operation({
    summary: "Get Igf",
  })
  @get()
  static getIgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igf",
  })
  @post("{id}")
  static createIgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
