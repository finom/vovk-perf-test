import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dob")
export default class DobController {
  @operation({
    summary: "Get Dob",
  })
  @get()
  static getDob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dob",
  })
  @post("{id}")
  static createDob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
