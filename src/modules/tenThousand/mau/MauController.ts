import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mau")
export default class MauController {
  @operation({
    summary: "Get Mau",
  })
  @get()
  static getMau = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mau",
  })
  @post("{id}")
  static createMau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
