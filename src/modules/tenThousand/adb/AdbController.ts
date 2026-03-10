import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adb")
export default class AdbController {
  @operation({
    summary: "Get Adb",
  })
  @get()
  static getAdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adb",
  })
  @post("{id}")
  static createAdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
