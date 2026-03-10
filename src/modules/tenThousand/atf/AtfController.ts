import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atf")
export default class AtfController {
  @operation({
    summary: "Get Atf",
  })
  @get()
  static getAtf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Atf",
  })
  @post("{id}")
  static createAtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
