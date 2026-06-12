import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arf")
export default class ArfController {
  @operation({
    summary: "Get Arf",
  })
  @get()
  static getArf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arf",
  })
  @post("{id}")
  static createArf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
