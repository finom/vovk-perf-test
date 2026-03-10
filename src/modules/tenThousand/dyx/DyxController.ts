import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyx")
export default class DyxController {
  @operation({
    summary: "Get Dyx",
  })
  @get()
  static getDyx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyx",
  })
  @post("{id}")
  static createDyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
