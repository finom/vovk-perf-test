import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ble")
export default class BleController {
  @operation({
    summary: "Get Ble",
  })
  @get()
  static getBle = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ble",
  })
  @post("{id}")
  static createBle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
