import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itk")
export default class ItkController {
  @operation({
    summary: "Get Itk",
  })
  @get()
  static getItk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itk",
  })
  @post("{id}")
  static createItk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
