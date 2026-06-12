import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imu")
export default class ImuController {
  @operation({
    summary: "Get Imu",
  })
  @get()
  static getImu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imu",
  })
  @post("{id}")
  static createImu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
