import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lou")
export default class LouController {
  @operation({
    summary: "Get Lou",
  })
  @get()
  static getLou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lou",
  })
  @post("{id}")
  static createLou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
