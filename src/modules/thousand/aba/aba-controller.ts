import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aba")
export default class AbaController {
  @operation({
    summary: "Get Aba",
  })
  @get()
  static getAba = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aba",
  })
  @post("{id}")
  static createAba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
