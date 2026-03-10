import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amo")
export default class AmoController {
  @operation({
    summary: "Get Amo",
  })
  @get()
  static getAmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amo",
  })
  @post("{id}")
  static createAmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
