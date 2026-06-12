import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muh")
export default class MuhController {
  @operation({
    summary: "Get Muh",
  })
  @get()
  static getMuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muh",
  })
  @post("{id}")
  static createMuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
