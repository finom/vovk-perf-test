import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ix")
export default class IxController {
  @operation({
    summary: "Get Ix",
  })
  @get()
  static getIx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ix",
  })
  @post("{id}")
  static createIx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
