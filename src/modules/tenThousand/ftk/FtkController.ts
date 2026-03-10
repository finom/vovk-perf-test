import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftk")
export default class FtkController {
  @operation({
    summary: "Get Ftk",
  })
  @get()
  static getFtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftk",
  })
  @post("{id}")
  static createFtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
