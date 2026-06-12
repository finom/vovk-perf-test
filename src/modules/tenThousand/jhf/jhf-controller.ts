import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhf")
export default class JhfController {
  @operation({
    summary: "Get Jhf",
  })
  @get()
  static getJhf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhf",
  })
  @post("{id}")
  static createJhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
