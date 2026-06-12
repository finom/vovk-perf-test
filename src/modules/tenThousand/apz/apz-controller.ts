import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apz")
export default class ApzController {
  @operation({
    summary: "Get Apz",
  })
  @get()
  static getApz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apz",
  })
  @post("{id}")
  static createApz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
