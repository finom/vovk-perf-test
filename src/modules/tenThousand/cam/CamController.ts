import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cam")
export default class CamController {
  @operation({
    summary: "Get Cam",
  })
  @get()
  static getCam = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cam",
  })
  @post("{id}")
  static createCam = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
