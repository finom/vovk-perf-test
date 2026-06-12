import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gor")
export default class GorController {
  @operation({
    summary: "Get Gor",
  })
  @get()
  static getGor = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gor",
  })
  @post("{id}")
  static createGor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
