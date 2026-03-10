import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iot")
export default class IotController {
  @operation({
    summary: "Get Iot",
  })
  @get()
  static getIot = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iot",
  })
  @post("{id}")
  static createIot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
