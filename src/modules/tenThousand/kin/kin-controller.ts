import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kin")
export default class KinController {
  @operation({
    summary: "Get Kin",
  })
  @get()
  static getKin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kin",
  })
  @post("{id}")
  static createKin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
