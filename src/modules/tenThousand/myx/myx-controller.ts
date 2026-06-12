import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myx")
export default class MyxController {
  @operation({
    summary: "Get Myx",
  })
  @get()
  static getMyx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Myx",
  })
  @post("{id}")
  static createMyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
