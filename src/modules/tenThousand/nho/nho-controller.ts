import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nho")
export default class NhoController {
  @operation({
    summary: "Get Nho",
  })
  @get()
  static getNho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nho",
  })
  @post("{id}")
  static createNho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
