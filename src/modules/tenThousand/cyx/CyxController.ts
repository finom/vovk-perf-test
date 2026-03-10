import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyx")
export default class CyxController {
  @operation({
    summary: "Get Cyx",
  })
  @get()
  static getCyx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyx",
  })
  @post("{id}")
  static createCyx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
